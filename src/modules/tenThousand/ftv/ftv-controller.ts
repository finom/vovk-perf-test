import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftv")
export default class FtvController {
  @operation({
    summary: "Get Ftv",
  })
  @get()
  static getFtv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ftv",
  })
  @post("{id}")
  static createFtv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
