import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejc")
export default class EjcController {
  @operation({
    summary: "Get Ejc",
  })
  @get()
  static getEjc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ejc",
  })
  @post("{id}")
  static createEjc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
