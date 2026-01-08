import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iit")
export default class IitController {
  @operation({
    summary: "Get Iit",
  })
  @get()
  static getIit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iit",
  })
  @post("{id}")
  static createIit = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
