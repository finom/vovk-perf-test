import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idf")
export default class IdfController {
  @operation({
    summary: "Get Idf",
  })
  @get()
  static getIdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idf",
  })
  @post("{id}")
  static createIdf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
