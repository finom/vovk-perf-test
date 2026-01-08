import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arr")
export default class ArrController {
  @operation({
    summary: "Get Arr",
  })
  @get()
  static getArr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arr",
  })
  @post("{id}")
  static createArr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
