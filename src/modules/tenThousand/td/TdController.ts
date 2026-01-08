import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("td")
export default class TdController {
  @operation({
    summary: "Get Td",
  })
  @get()
  static getTd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Td",
  })
  @post("{id}")
  static createTd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
