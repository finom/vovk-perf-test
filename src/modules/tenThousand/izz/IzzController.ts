import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izz")
export default class IzzController {
  @operation({
    summary: "Get Izz",
  })
  @get()
  static getIzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izz",
  })
  @post("{id}")
  static createIzz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
