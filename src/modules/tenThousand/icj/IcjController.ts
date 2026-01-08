import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icj")
export default class IcjController {
  @operation({
    summary: "Get Icj",
  })
  @get()
  static getIcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icj",
  })
  @post("{id}")
  static createIcj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
