import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fov")
export default class FovController {
  @operation({
    summary: "Get Fov",
  })
  @get()
  static getFov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fov",
  })
  @post("{id}")
  static createFov = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
