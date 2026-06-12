import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("faz")
export default class FazController {
  @operation({
    summary: "Get Faz",
  })
  @get()
  static getFaz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Faz",
  })
  @post("{id}")
  static createFaz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
