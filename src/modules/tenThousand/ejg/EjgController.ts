import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejg")
export default class EjgController {
  @operation({
    summary: "Get Ejg",
  })
  @get()
  static getEjg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ejg",
  })
  @post("{id}")
  static createEjg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
