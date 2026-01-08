import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iam")
export default class IamController {
  @operation({
    summary: "Get Iam",
  })
  @get()
  static getIam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iam",
  })
  @post("{id}")
  static createIam = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
