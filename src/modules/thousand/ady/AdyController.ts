import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ady")
export default class AdyController {
  @operation({
    summary: "Get Ady",
  })
  @get()
  static getAdy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ady",
  })
  @post("{id}")
  static createAdy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
