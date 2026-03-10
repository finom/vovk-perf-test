import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gca")
export default class GcaController {
  @operation({
    summary: "Get Gca",
  })
  @get()
  static getGca = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gca",
  })
  @post("{id}")
  static createGca = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
