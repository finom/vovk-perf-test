import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjj")
export default class KjjController {
  @operation({
    summary: "Get Kjj",
  })
  @get()
  static getKjj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kjj",
  })
  @post("{id}")
  static createKjj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
