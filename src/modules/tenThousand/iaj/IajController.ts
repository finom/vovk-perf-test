import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iaj")
export default class IajController {
  @operation({
    summary: "Get Iaj",
  })
  @get()
  static getIaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iaj",
  })
  @post("{id}")
  static createIaj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
