import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejv")
export default class EjvController {
  @operation({
    summary: "Get Ejv",
  })
  @get()
  static getEjv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ejv",
  })
  @post("{id}")
  static createEjv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
