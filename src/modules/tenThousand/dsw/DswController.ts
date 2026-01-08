import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsw")
export default class DswController {
  @operation({
    summary: "Get Dsw",
  })
  @get()
  static getDsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsw",
  })
  @post("{id}")
  static createDsw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
