import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlh")
export default class MlhController {
  @operation({
    summary: "Get Mlh",
  })
  @get()
  static getMlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlh",
  })
  @post("{id}")
  static createMlh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
