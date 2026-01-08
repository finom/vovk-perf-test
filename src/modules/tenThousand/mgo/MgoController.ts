import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgo")
export default class MgoController {
  @operation({
    summary: "Get Mgo",
  })
  @get()
  static getMgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgo",
  })
  @post("{id}")
  static createMgo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
