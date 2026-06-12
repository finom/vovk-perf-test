import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acz")
export default class AczController {
  @operation({
    summary: "Get Acz",
  })
  @get()
  static getAcz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Acz",
  })
  @post("{id}")
  static createAcz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
