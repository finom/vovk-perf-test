import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afp")
export default class AfpController {
  @operation({
    summary: "Get Afp",
  })
  @get()
  static getAfp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afp",
  })
  @post("{id}")
  static createAfp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
