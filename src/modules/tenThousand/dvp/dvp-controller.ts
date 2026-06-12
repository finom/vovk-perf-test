import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvp")
export default class DvpController {
  @operation({
    summary: "Get Dvp",
  })
  @get()
  static getDvp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dvp",
  })
  @post("{id}")
  static createDvp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
