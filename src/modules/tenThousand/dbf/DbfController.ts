import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbf")
export default class DbfController {
  @operation({
    summary: "Get Dbf",
  })
  @get()
  static getDbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbf",
  })
  @post("{id}")
  static createDbf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
