import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hba")
export default class HbaController {
  @operation({
    summary: "Get Hba",
  })
  @get()
  static getHba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hba",
  })
  @post("{id}")
  static createHba = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
