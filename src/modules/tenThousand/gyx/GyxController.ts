import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyx")
export default class GyxController {
  @operation({
    summary: "Get Gyx",
  })
  @get()
  static getGyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyx",
  })
  @post("{id}")
  static createGyx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
