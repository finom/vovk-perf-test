import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejz")
export default class EjzController {
  @operation({
    summary: "Get Ejz",
  })
  @get()
  static getEjz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ejz",
  })
  @post("{id}")
  static createEjz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
