import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vj")
export default class VjController {
  @operation({
    summary: "Get Vj",
  })
  @get()
  static getVj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Vj",
  })
  @post("{id}")
  static createVj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
