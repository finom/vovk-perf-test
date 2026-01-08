import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cft")
export default class CftController {
  @operation({
    summary: "Get Cft",
  })
  @get()
  static getCft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cft",
  })
  @post("{id}")
  static createCft = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
