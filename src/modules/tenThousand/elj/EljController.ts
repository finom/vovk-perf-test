import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elj")
export default class EljController {
  @operation({
    summary: "Get Elj",
  })
  @get()
  static getElj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elj",
  })
  @post("{id}")
  static createElj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
