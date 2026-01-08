import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tc")
export default class TcController {
  @operation({
    summary: "Get Tc",
  })
  @get()
  static getTc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tc",
  })
  @post("{id}")
  static createTc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
