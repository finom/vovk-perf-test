import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnw")
export default class CnwController {
  @operation({
    summary: "Get Cnw",
  })
  @get()
  static getCnw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cnw",
  })
  @post("{id}")
  static createCnw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
