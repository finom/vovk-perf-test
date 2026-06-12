import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imn")
export default class ImnController {
  @operation({
    summary: "Get Imn",
  })
  @get()
  static getImn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Imn",
  })
  @post("{id}")
  static createImn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
