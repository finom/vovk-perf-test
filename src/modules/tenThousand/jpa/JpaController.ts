import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpa")
export default class JpaController {
  @operation({
    summary: "Get Jpa",
  })
  @get()
  static getJpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpa",
  })
  @post("{id}")
  static createJpa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
