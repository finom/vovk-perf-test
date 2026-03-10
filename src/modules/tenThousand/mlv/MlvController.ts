import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlv")
export default class MlvController {
  @operation({
    summary: "Get Mlv",
  })
  @get()
  static getMlv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mlv",
  })
  @post("{id}")
  static createMlv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
