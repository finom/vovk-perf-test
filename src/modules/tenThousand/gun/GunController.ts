import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gun")
export default class GunController {
  @operation({
    summary: "Get Gun",
  })
  @get()
  static getGun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gun",
  })
  @post("{id}")
  static createGun = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
