import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csv")
export default class CsvController {
  @operation({
    summary: "Get Csv",
  })
  @get()
  static getCsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csv",
  })
  @post("{id}")
  static createCsv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
