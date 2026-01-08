import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cub")
export default class CubController {
  @operation({
    summary: "Get Cub",
  })
  @get()
  static getCub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cub",
  })
  @post("{id}")
  static createCub = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
