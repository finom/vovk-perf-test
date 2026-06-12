import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ent")
export default class EntController {
  @operation({
    summary: "Get Ent",
  })
  @get()
  static getEnt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ent",
  })
  @post("{id}")
  static createEnt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
