import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjw")
export default class KjwController {
  @operation({
    summary: "Get Kjw",
  })
  @get()
  static getKjw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kjw",
  })
  @post("{id}")
  static createKjw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
