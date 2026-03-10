import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egz")
export default class EgzController {
  @operation({
    summary: "Get Egz",
  })
  @get()
  static getEgz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Egz",
  })
  @post("{id}")
  static createEgz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
