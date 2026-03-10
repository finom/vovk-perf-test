import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("db")
export default class DbController {
  @operation({
    summary: "Get Db",
  })
  @get()
  static getDb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Db",
  })
  @post("{id}")
  static createDb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
