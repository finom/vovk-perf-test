import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aze")
export default class AzeController {
  @operation({
    summary: "Get Aze",
  })
  @get()
  static getAze = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aze",
  })
  @post("{id}")
  static createAze = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
