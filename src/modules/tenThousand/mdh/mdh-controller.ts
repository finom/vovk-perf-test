import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdh")
export default class MdhController {
  @operation({
    summary: "Get Mdh",
  })
  @get()
  static getMdh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mdh",
  })
  @post("{id}")
  static createMdh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
