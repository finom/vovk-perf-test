import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbn")
export default class FbnController {
  @operation({
    summary: "Get Fbn",
  })
  @get()
  static getFbn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fbn",
  })
  @post("{id}")
  static createFbn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
