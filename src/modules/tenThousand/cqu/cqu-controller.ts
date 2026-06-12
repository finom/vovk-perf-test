import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqu")
export default class CquController {
  @operation({
    summary: "Get Cqu",
  })
  @get()
  static getCqu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cqu",
  })
  @post("{id}")
  static createCqu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
