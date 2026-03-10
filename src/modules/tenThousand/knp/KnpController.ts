import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knp")
export default class KnpController {
  @operation({
    summary: "Get Knp",
  })
  @get()
  static getKnp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Knp",
  })
  @post("{id}")
  static createKnp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
