import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ike")
export default class IkeController {
  @operation({
    summary: "Get Ike",
  })
  @get()
  static getIke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ike",
  })
  @post("{id}")
  static createIke = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
