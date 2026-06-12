import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjc")
export default class KjcController {
  @operation({
    summary: "Get Kjc",
  })
  @get()
  static getKjc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kjc",
  })
  @post("{id}")
  static createKjc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
