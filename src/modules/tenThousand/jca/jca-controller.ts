import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jca")
export default class JcaController {
  @operation({
    summary: "Get Jca",
  })
  @get()
  static getJca = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jca",
  })
  @post("{id}")
  static createJca = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
