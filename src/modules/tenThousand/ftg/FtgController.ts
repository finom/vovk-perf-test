import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftg")
export default class FtgController {
  @operation({
    summary: "Get Ftg",
  })
  @get()
  static getFtg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ftg",
  })
  @post("{id}")
  static createFtg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
