import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("moy")
export default class MoyController {
  @operation({
    summary: "Get Moy",
  })
  @get()
  static getMoy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Moy",
  })
  @post("{id}")
  static createMoy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
