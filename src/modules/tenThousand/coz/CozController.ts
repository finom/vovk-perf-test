import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("coz")
export default class CozController {
  @operation({
    summary: "Get Coz",
  })
  @get()
  static getCoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coz",
  })
  @post("{id}")
  static createCoz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
