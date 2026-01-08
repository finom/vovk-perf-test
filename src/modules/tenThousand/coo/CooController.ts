import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("coo")
export default class CooController {
  @operation({
    summary: "Get Coo",
  })
  @get()
  static getCoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coo",
  })
  @post("{id}")
  static createCoo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
