import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iry")
export default class IryController {
  @operation({
    summary: "Get Iry",
  })
  @get()
  static getIry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iry",
  })
  @post("{id}")
  static createIry = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
