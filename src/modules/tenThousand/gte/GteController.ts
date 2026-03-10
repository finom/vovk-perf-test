import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gte")
export default class GteController {
  @operation({
    summary: "Get Gte",
  })
  @get()
  static getGte = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gte",
  })
  @post("{id}")
  static createGte = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
